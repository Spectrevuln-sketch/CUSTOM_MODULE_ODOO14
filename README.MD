Cara menjalankan unit test code coverage

```sh {"id":"01J796P0G41B5TNES994ZCMJWD"}
./run_coverage.sh -p C:/PROJECT/odoo14 -d <db_name> -i material_purchase -c C:/PROJECT/odoo14/odoo_config.conf
```

Alternatifnya berikut:

```sh {"id":"01J7949HGGKBM6F6JX3RKNYYAA"}
coverage run --source=material_purchase C:\PROJECT\odoo14\odoo-bin -c C:\PROJECT\odoo14\odoo_config.conf --test-enable --stop-after-init -d <db_name> -i material_purchase
coverage html
```

- Ganti **C:/PROJECT/odoo14/** atau **C:\PROJECT\odoo14** ke path direktori odoo project anda
- Ganti __<db_name>__ dengan db odoo anda
- Jalan kan perintah __coverage html (optional)__ jika ingin generate atau merefresh __index.html__ coverage

Menjalankan Module Odoo

```sh {"id":"01J794B9WRAZ6M21DW15ANG64X"}
cd path/to/odoo/project
python C:\PROJECT\odoo14\odoo-bin -c C:\PROJECT\odoo14\odoo_config.conf -d <db_name> -i material_purchase
```

- Ganti __<db_name>__ dengan db odoo anda
- Ganti **C:\PROJECT\odoo14** ke path direktori odoo project anda