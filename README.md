# prl-prg website

# Usage

## Install jekyll (Linux / Windows)

```sh
sudo apt-get install build-essential # if you do not have gcc and stuff
sudo apt-get ruby ruby-dev           # if you do not have ruby
sudo gem install jekyll bundler      # if you do not have jekyll and bundler
```

## Install jekyll (OSX)

```sh
sudo gem install jekyll bundler      # if you do not have jekyll and bundler
```

## Build the site

```sh
git clone https://github.com/PRL-PRG/prl-prg.github.io.git
cd prl-prg.github.io
bundle install
bundle exec jekyll serve
```

This will run a local webserver. The site is accessible at [localhost:4000](localhost:4000).

## Updates

Please test locally and then create a PR.
