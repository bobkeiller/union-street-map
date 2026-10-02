#!/bin/zsh

# Double-click this file on a Mac after editing data/union-street-units.csv.
# It validates, commits, and pushes only the property register.

set -u

PROJECT_DIR="${0:A:h}"
DATA_FILE="data/union-street-units.csv"
DEFAULT_MESSAGE="Update property register $(date '+%Y-%m-%d %H:%M')"

cd "$PROJECT_DIR" || {
  echo "Could not open the project folder."
  exit 1
}

echo
echo "Union Street map — publish unit updates"
echo "Project: $PROJECT_DIR"
echo

for command_name in git node; do
  if ! command -v "$command_name" >/dev/null 2>&1; then
    echo "ERROR: $command_name is not installed or is not available in Terminal."
    echo "Nothing was published."
    exit 1
  fi
done

if [[ ! -f "$DATA_FILE" ]]; then
  echo "ERROR: $DATA_FILE was not found."
  echo "Nothing was published."
  exit 1
fi

if [[ "$(git branch --show-current)" != "main" ]]; then
  echo "ERROR: Switch to the main branch before publishing."
  echo "Nothing was published."
  exit 1
fi

echo "1. Validating the property register…"
if ! node scripts/validate-data.mjs; then
  echo
  echo "Validation failed. Correct the issues above and try again."
  echo "Nothing was committed or published."
  exit 1
fi

if git diff --quiet -- "$DATA_FILE"; then
  echo
  echo "There are no unpublished changes in $DATA_FILE."
  exit 0
fi

echo
echo "2. Checking GitHub for newer work…"
if ! git fetch origin main; then
  echo
  echo "Could not contact GitHub. Check the internet connection and GitHub login."
  echo "Nothing was committed or published."
  exit 1
fi

LOCAL_COMMIT="$(git rev-parse main)"
REMOTE_COMMIT="$(git rev-parse origin/main)"
MERGE_BASE="$(git merge-base main origin/main)"
if [[ "$LOCAL_COMMIT" != "$REMOTE_COMMIT" && "$LOCAL_COMMIT" == "$MERGE_BASE" ]]; then
  echo
  echo "GitHub contains newer changes. Nothing was published."
  echo "Run 'git pull --rebase origin main', review the result, then try again."
  exit 1
fi
if [[ "$LOCAL_COMMIT" != "$REMOTE_COMMIT" && "$REMOTE_COMMIT" != "$MERGE_BASE" ]]; then
  echo
  echo "The local and GitHub histories have diverged. Nothing was published."
  echo "Resolve the Git history before trying again."
  exit 1
fi

echo
echo "3. Changes ready to publish:"
git diff --stat -- "$DATA_FILE"
git diff --color=always -- "$DATA_FILE"

if [[ "${1:-}" == "--dry-run" ]]; then
  echo
  echo "Dry run complete. Nothing was committed or published."
  exit 0
fi

echo
read "COMMIT_MESSAGE?Describe this update [$DEFAULT_MESSAGE]: "
COMMIT_MESSAGE="${COMMIT_MESSAGE:-$DEFAULT_MESSAGE}"

echo
read "CONFIRM?Publish this CSV update to the live website? [y/N]: "
if [[ ! "$CONFIRM" =~ '^[Yy]$' ]]; then
  echo "Cancelled. Nothing was committed or published."
  exit 0
fi

echo
echo "4. Committing only $DATA_FILE…"
if ! git add -- "$DATA_FILE" || ! git commit --only -m "$COMMIT_MESSAGE" -- "$DATA_FILE"; then
  echo
  echo "The commit failed. Nothing was pushed to GitHub."
  exit 1
fi

echo
echo "5. Publishing to GitHub…"
if ! git push origin main; then
  echo
  echo "The commit was saved locally, but the push failed."
  echo "After correcting the connection or login, run: git push origin main"
  exit 1
fi

echo
echo "SUCCESS: The property register was published to GitHub."
echo "GitHub Pages will normally update the website within a few minutes."
echo "Website: https://ouraberdeendata.co.uk"
