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

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app
