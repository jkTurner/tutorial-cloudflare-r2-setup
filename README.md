# Upload Files to Cloudflare R2 (Next.js 15)

This tutorial shows how to integrate **Cloudflare R2** into your **Next.js 15** project to support secure file uploads using presigned URLs. You'll walk through setting up R2 on the Cloudflare dashboard, configuring environment variables, and writing both server and client code to upload images directly to your R2 bucket — no backend storage required.

## What This Project Covers

- Setting up an R2 bucket and API token in Cloudflare
- Generating and storing credentials safely in `.env.local`
- Configuring CORS settings for local and production usage
- Connecting to R2 using `@aws-sdk/client-s3`
- Generating presigned URLs using `@aws-sdk/s3-request-presigner`
- Creating an API route that returns a signed URL for secure uploads
- Building a frontend page to upload images and show upload status

## Read the Full Tutorial

This project is part of the **Dev Steps Tutorials** series by Jakkrit Turner.  
Follow the complete tutorial here:

**[Cloudflare R2 Upload Tutorial on jkturner.site](https://www.jkturner.site/tutorials/react-ecosystem/cloudflare-r2-setup)**

## Tech Stack

- Next.js 15.3.4
- Tailwind CSS 4
- Cloudflare R2
- AWS SDK v3
