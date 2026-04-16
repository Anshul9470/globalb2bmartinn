# Install on server
- Install docker and docker swarm
- init swarm

Commands
```
# deploy and remove
sudo docker stack rm globalb2b
sudo docker stack deploy -c docker-prod-compose.yml globalb2b

# create cert , remove --dry-run second time.
sudo docker service create \
  --mount type=bind,source=$(pwd)/certbot/www/,destination=/var/www/certbot/,ro=0 \
  --mount type=bind,source=$(pwd)/certbot/conf/,destination=/etc/letsencrypt/,ro=0 \
  --name certbot certbot/certbot:latest certonly --webroot --webroot-path /var/www/certbot/ \
  --email webwavebusinesspvtltd@gmail.com --agree-tos --no-eff-email \
  --dry-run -d api.globalb2bmart.in

# after 3 months run this or set a cron
sudo docker service create \
  --mount type=bind,source=$(pwd)/certbot/www/,destination=/var/www/certbot/,ro=0 \
  --mount type=bind,source=$(pwd)/certbot/conf/,destination=/etc/letsencrypt/,ro=0 \
  --name certbot certbot/certbot:latest renew 
```
