#!/bin/bash
cd /home/kavia/workspace/code-generation/sonicease-8011-8017/main_container_for_sonicease
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

