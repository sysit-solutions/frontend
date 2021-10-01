#!/bin/sh


BIN_DIR=`dirname $0`
. "${BIN_DIR}/common.sh"
setup

echo "Frontend"
echo "========"
if [ ! -z $(which hostname &>/dev/null) ]; then
  export HOST=$(hostname)
elif [ ! -z $(which hostnamectl &>/dev/null)]; then
  export HOST=$(hostnamectl hostname)
fi
"${PACKAGE_MANAGER}" start
