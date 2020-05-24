# rails-react

Ruby on Rails x React

## Required

- Docker
- Docker Compose

## Get started

```sh
docker-compose build
docker-compose up -d
```

## Details

### Creation procedure

Ruby の Docker コンテナ内で作業

参考: https://github.com/reactjs/react-rails

Required

- build-dependencies(ビルド用、入れないと rails 自体が入らない)
- build-base(ビルド用、入れないと rails 自体が入らない)
- sqlite(SQLite 用、今回は React の検証メインのため、SQLite を使用)
- sqlite-dev(SQLite 用)
- nodejs(React 導入用)
- yarn(JS パッケージ管理用)

```sh
# Create Rails Application
$ gem install rails
$ rails new app
$ cd app

# Gemfileに以下を追記
gem 'react-rails'

$ bundle install
$ rails webpacker:install
$ rails webpacker:install:react
$ rails webpacker:install:typescript
$ rails generate react:install

# Generate Component
$ rails generate react:component Hello name:string --ts
```