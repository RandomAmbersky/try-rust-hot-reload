#!/bin/bash

# npm install --verbose
npm ci --verbose

# Get Rust
curl https://sh.rustup.rs -sSf | bash -s -- -y
export PATH="/root/.cargo/bin:${PATH}"

# Get Rust
# RUN curl https://sh.rustup.rs -sSf | bash -s -- -y

# export PATH="/root/.cargo/bin:${PATH}"
# export RUST_LOG=info

curl https://rustwasm.github.io/wasm-pack/installer/init.sh -sSf | sh
cargo install -f wasm-bindgen-cli

npm run start
