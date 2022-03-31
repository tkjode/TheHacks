#!/bin/sh

find -type f -name *.yaml -exec ./push_to_consul.sh {} \;
