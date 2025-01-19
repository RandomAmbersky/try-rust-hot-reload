#!/bin/bash

npm install --verbose

export PATH="/root/.cargo/bin:${PATH}"
export RUST_LOG=info

cargo install -f wasm-bindgen-cli
npm run start
