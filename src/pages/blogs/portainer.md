---
layout: "../../layouts/BlogPostLayout.astro"
slug: portainer
title: Why I use Portainer.io ?
synopsis: Running and managing Containers could never be this easy. Portainer.io is a Container Management System that is easy to install and easy to operate on your own for your local development.
published: May 28, 2022
preview: /portainer/preview.png
authorProfilePic: /authors/santhosh.raju.jpeg
tags:
  - Linux
  - Docker
---

In this blog, we will discuss about Portainer.io, one of the many Container Management Tools.

### So what is Portainer.io ?

As they say it on their website, **"Portainer.io - Container Management made easy"**, My emphasis is on the word "easy", it truly is easy. Easy to setup & Easy to use, compared to other Container Management Tools in the market. **It is a Container Management System for Kubernetes, Docker & Docker Swarm.**

### Why do I use Portainer.io ?

As an application developer, setting up a database or broker queue in my local machine might be a little cumbersome and sometimes time consuming as well. With Portainer.io, I can deploy any database or broker queue as easily as searching appropriate Docker Image and deploying it with few clicks in their user friendly web interface.

### Installing Portainer.io

As mentioned earlier Portainer.io is a Container Management System for Kubernetes, Docker & Docker Swarm. For simplicity, I will install portainer.io on a Docker standalone environment.

**But the prerequisite to install Portianer.io is a Docker Daemon running on host machine.** Because Portainer.io runs its two main components, Portainer.io Server & Portainer.io Agent, as lightweight Docker Containers on Docker Engine.

I will be using my Raspberry Pi running Raspbian, but you don't really need a Raspberry Pi, you can install it on your local machine (I'm just being fancy and also my Macbook pro is pretty low on memory these days).

![raspberry pi](/portainer/raspberry-pi.jpeg)

On my Raspberry Pi, I have already installed Docker and Docker Daemon running, and I can verify it using the following command.

```shell
docker --version
```

![docker version output](/portainer/docker-version-output.png)

First, let’s create a volume for Portainer.io to use it as a database volume.

```shell
docker volume create portainer_db
```

Now, let’s download the Portainer.io Server Docker Image and run it as a Docker Container.

```shell
docker run -d -p 8000:8000 -p 9443:9443 --name portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_db:/data portainer/portainer-ce:2.11.1
```

The Portainer.io Server should now be running, I will confirm it using `docker ps` command

![docker ps output](/portainer/docker-ps-output.png)

I can access Portainer.io Server via a web browser by navigating to `http://192.168.0.164:9443` (Because I have already assigned a static IP to my Raspberry Pi on my router) or navigating to `http://localhost:9443` (If you are running it on your local machine)

![portainer website](/portainer/portainer-website.png)

### How to use Portainer.io ?

Now for the fun stuff, how to use Portainer.io. For this explanation, let me deploy a Redis Database and consume it.

Navigate to `http://192.168.0.164:9443` or `http://localhost:9443` for accessing Portainer.io Server and search for Redis Docker Image.

![Redis installation 1](/portainer/redis-installation-1.png)
Make sure you toggle the **"Publish all exposed network ports to random host ports"** on, or else you will get port conflicts when trying to run two containers using the same port.

Now let me deploy a Redis container

![Redis installation 2](/portainer/redis-installation-2.png)

Once it is deployed, I can check for the configured ports and other container details by navigating to the deployed container.

![Redis installation 3](/portainer/redis-installation-3.png)

### Now, to test the Redis connection. I will use redis-cli

For testing the Redis container that was deployed, I will connect to Redis server and run some basic commands like **ping, set key-value pair, get key's value**.

![Redis test 1](/portainer/redis-test-1.png)

![Redis test 2](/portainer/redis-test-2.png)

![Redis test 3](/portainer/redis-test-3.png)

![Redis test 4](/portainer/redis-test-4.png)

### Conclusion

Wasn’t that easy !!!. Similarly, you can deploy & setup any Database, Broker Queue or even Jenkins on Portainer.io and start using it with just few clicks on their user friendly web interface. Setting up tools should be this easy and simple, allowing you to invest more time in developing the features.

As said earlier Portainer.io can be installed on Kubernetes, Docker Swarm or Nomad. In my next blog on Portainer.io I will be installing it on Docker Swarm production-like cluster. Until then, stay tuned and stay safe.
