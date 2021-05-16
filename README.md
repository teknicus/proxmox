# proxmox

- Create VM - POST https://192.168.0.100:8006/api2/json/nodes/appledore/qemu
- List VMs - GET https://192.168.0.100:8006/api2/json/nodes/appledore/qemu
- Details of one VM - GET everything from about and refer VMid
- Update VM - POST https://192.168.0.100:8006/api2/json/nodes/appledore/qemu/{vmid}/config
- Delete VM - DELETE https://192.168.0.100:8006/api2/json/nodes/appledore/qemu/{vmid}

Ref : https://pve.proxmox.com/pve-docs/api-viewer/#/nodes

