FROM ruby:2.7-alpine as base

LABEL Name=rails-react Version=0.0.1
EXPOSE 3000

RUN apk update && \
    apk add --no-cache --virtual build-dependencies build-base sqlite sqlite-dev nodejs yarn

# throw errors if Gemfile has been modified since Gemfile.lock
RUN bundle config --global frozen 1

FROM base as build

WORKDIR /app
COPY ./app /app

# bundle install並列実行
RUN bundle config --global jobs 10 && \
    bundle install && \
    yarn && \
    rails db:migrate

CMD ["rails", "s", "-p", "3000", "-b", "0.0.0.0"]
    