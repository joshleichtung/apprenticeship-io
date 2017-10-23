# apprenticeship-io

# Development Setup
## Rails
* Run `bundle install`
  * If you get an error when installing capybara-webkit along the lines of `command qmake not available`, it is because a build dependency for webkit is not installed on your machine. [Follow these instructions](https://github.com/thoughtbot/capybara-webkit/wiki/Installing-Qt-and-compiling-capybara-webkit) and try to `bundle install` again. TLDR; - for macOS Sierra, El Capitan, and Yosemite with bash run:
```
brew install qt@5.5
echo 'export PATH="$(brew --prefix qt@5.5)/bin:$PATH"' >> ~/.bashrc
```
## React
