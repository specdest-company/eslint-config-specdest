prettier config

# Usage

`pnpm install git+https://github.com/specdest-company/tool_config_prettier.git#v0.0.1 -D`

# Contribution

- `pnpm i`
- `git add .`
- `git commit`
- `pnpm release` this increments git tag and push to github

# Some useful info

- while installing `commitizen` we added `git hooks`.
  https://github.com/commitizen/cz-cli
  `.git/hooks/prepare-commit-msg`
  ```sh
  #!/bin/bash
  exec < /dev/tty && node_modules/.bin/cz --hook || true
  ```
