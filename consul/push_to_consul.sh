#!/bin/sh

YAML=$1

if [ -f ${YAML} ]; then
  yq -c '.' ${YAML} | curl -XPUT --data @- http://10.0.0.5:8500/v1/agent/service/register
fi
