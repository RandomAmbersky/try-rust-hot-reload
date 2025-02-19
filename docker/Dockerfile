# Используем официальный образ Node.js
FROM node:23-alpine


RUN apk --no-cache add bash curl mc
# need for cc compiler for rust wasm lib
RUN apk --no-cache add build-base

# Get Rust
RUN curl https://sh.rustup.rs -sSf | bash -s -- -y
ENV PATH="/root/.cargo/bin:${PATH}"
ENV RUST_LOG=info

RUN curl https://rustwasm.github.io/wasm-pack/installer/init.sh -sSf | sh
RUN rustup target add wasm32-unknown-unknown
RUN cargo install -f wasm-bindgen-cli

# Install python/pip (нужно для node-gyp который хочет его для parcel-bundler)
# ENV PYTHONUNBUFFERED=1
# RUN apk add --update --no-cache python3 && ln -sf python3 /usr/bin/python
# это тоже хочет node-gyp для сборки
# RUN apk --no-cache add build-base lscpu

# RUN python3 -m ensurepip
# RUN pip3 install --no-cache --upgrade pip setuptools

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app

# Устанавливаем Parcel глобально
# RUN npm install -g parcel-bundler --loglevel verbose

# # Открываем порт для разработки
# EXPOSE 1234
# EXPOSE 44489

# Запускаем Parcel для разработки
# CMD ["parcel", "index.html"]
