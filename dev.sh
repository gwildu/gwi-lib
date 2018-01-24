#!/bin/bash

onExit() {
  # capture the output to avoid printing it
  # after that the script returns
  val=$(yarn unlink)
}

trap onExit EXIT

yarn link

npm-run-all -l -n -p "build:dev"

