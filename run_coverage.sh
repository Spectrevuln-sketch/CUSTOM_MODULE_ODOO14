#!/bin/bash

# Inisialisasi variabel
DIRECTORY_PATH=""
DATABASE_NAME=""
MODULE_NAME=""
CONFIG_PATH=""

# Fungsi untuk menampilkan usage
usage() {
    echo "Usage: $0 -p <path_to_odoo_directory> -d <database_name> -i <module_name> -c <path_to_config>"
    exit 1
}

# Parsing flag dengan getopts
while getopts ":p:d:i:c:" opt; do
  case $opt in
    p)
      DIRECTORY_PATH=$OPTARG
      ;;
    d)
      DATABASE_NAME=$OPTARG
      ;;
    i)
      MODULE_NAME=$OPTARG
      ;;
    c)
      CONFIG_PATH=$OPTARG
      ;;
    \?)
      echo "Invalid option: -$OPTARG" >&2
      usage
      ;;
    :)
      echo "Option -$OPTARG requires an argument." >&2
      usage
      ;;
  esac
done

# Cek apakah semua variabel diisi
if [ -z "$DIRECTORY_PATH" ] || [ -z "$DATABASE_NAME" ] || [ -z "$MODULE_NAME" ] || [ -z "$CONFIG_PATH" ]; then
    usage
fi

# Jalankan perintah dengan path direktori, nama database, modul, dan path config yang diberikan
coverage run --source="$MODULE_NAME" "$DIRECTORY_PATH/odoo-bin" -c "$CONFIG_PATH" --test-enable --stop-after-init -d "$DATABASE_NAME" -i "$MODULE_NAME"
coverage html
