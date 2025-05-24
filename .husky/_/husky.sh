#!/bin/sh
if [ -z "$husky_skip_init" ]; then
  debug() {
    [ "$HUSKY_DEBUG" = "1" ] && echo "husky: $*"
  }
  husky_git_params="$(git rev-parse --git-path hooks)/husky.local"
  if [ -f "$husky_git_params" ]; then
    debug "read $husky_git_params"
    . "$husky_git_params"
  fi
fi
