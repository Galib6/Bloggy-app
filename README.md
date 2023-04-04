## Contributors

Md. Asadullah al Galib (project lead)

## Documentation

This project is a Next.js web application that allows users to create, view, and interact with blog posts. It is designed to support different user roles and implement server-side rendering for the HomePage and PostPage. In addition, the application features a rich text editor for creating blog posts, search functionality, and basic CSS styling using Tailwind CSS.

## Live Site

You can access the live site by navigating to the following link: https://bloggy-app-weld.vercel.app/

## User Roles and Login Credentials

This application supports three different user roles:

Admin:
Email: galib@gmail.com
Password: 51390624

Author:
Email: galib1@gmail.com
Password: 51390624

Reader:
Email: galib2@gmail.com
Password: 51390624

## Pages and Components

The application includes three main pages:

1. HomePage: This page displays a paginated list of blog posts with their titles and a short excerpt of their content. Each blog post is clickable and navigates to its individual post page.
2. PostPage: This page displays the full content of an individual blog post, including its title, content, and associated comments. Users can leave comments on the blog post.
3. CreatePostPage: This page displays a form allowing users to create a new blog post. The form includes fields for the post's title, content, and an optional image upload. A rich text editor like Quill or Draft.js is used for the content field.
4. In addition to the main pages, the application also includes several components for common UI elements, such as headers, footers, and navigation menus.

## Server-Side Rendering

The HomePage and PostPage implement server-side rendering (SSR) using Next.js's getServerSideProps function. This allows the application to fetch blog posts and individual post data from the server and render them on the page, improving performance and SEO.

## Search Functionality

The application includes search functionality that allows users to search for blog posts by title or content. This feature is implemented using a search bar and a backend API that performs the search.

## CSS Styling

The application includes basic CSS styling using Tailwind CSS to make it visually appealing and user-friendly.

## Conclusion

This application is a fully-featured blog platform that supports multiple user roles, server-side rendering, search functionality, and client-side form validation. It is built using modern React best practices and is designed to be scalable and easy to maintain.
