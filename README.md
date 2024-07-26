# Meme Generator 🤡

Meme Generator is a web application developed using Nuxt.js 3. It generates random memes and stores them using Firebase, allowing for dynamic updates.

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/2giosangmitom/meme-generator?quickstart=1)

## Features ✨

- **Generate Random Memes:** Instantly create random memes with a click.
- **Dynamic Storage with Firebase:** Store and retrieve memes dynamically for real-time updates.

## Technologies Used 🛠️

- **Nuxt.js:** A modern Vue.js framework for building server-side rendered applications, static sites, and more.
- **Vue.js:** A progressive JavaScript framework for building user interfaces.
- **Firebase:** A platform developed by Google for creating mobile and web applications.
- **VueFire:** Firebase integration for Vue.js.
- **Pinia:** A state management library for Vue.js.

## Getting Started 🚀

### Prerequisites 📋

- **Node.js (v20):** A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **pnpm (v9):** A fast, disk space-efficient package manager.
- **Firebase Account:** Required to deploy this app locally.

> [!TIP]
> This repository includes a `flake.nix` file to set up the development environment for the Nuxt.js project. If you have Nix installed, simply run `nix develop` in the project root to avoid installing the above prerequisites manually. ❄️

### Run Development Server 🖥️

Follow these steps to get a local copy of the project up and running on your machine:

1. **Clone the Repository:**

   ```shell
   git clone https://github.com/2giosangmitom/meme-generator.git
   ```

2. **Navigate to the Project Directory:**

   ```shell
   cd meme-generator
   ```

3. **Install Dependencies:**

   ```shell
   pnpm install
   ```

4. **Configure Environment Variables:**

   Create a `.env` file in the root directory of the project and add your Firebase configuration. Ensure you add some images to your Firebase storage so the app can list and display all available memes.

   ```env
   API_KEY=your_api_key
   AUTH_DOMAIN=your_auth_domain
   PROJECT_ID=your_project_id
   STORAGE_BUCKET=your_storage_bucket
   MESSAGING_SENDER_ID=your_messaging_sender_id
   APP_ID=your_app_id
   MEASUREMENT_ID=your_measurement_id
   ```

5. **Run the Development Server:**

   ```shell
   pnpm dev
   ```

6. **Open in Your Browser:**

   Open your web browser and navigate to `http://localhost:3000` to view the application.

### Building for Production 🏗️

To build the application for production, run:

```bash
pnpm run build
pnpm run preview
```

The application will be available at `http://localhost:3000`.

### Deployment 🚢

You can deploy the built application to any static hosting service, such as Vercel, Netlify, Firebase, or GitHub Pages. Follow the specific deployment instructions provided by the hosting service.

- Official documentation: [Nuxt Deployment Guide](https://nuxt.com/deploy)

## Contributing 🤝

Contributions are welcome! If you have suggestions, bug fixes, or improvements, please feel free to open an issue or create a pull request.

## License 📜

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Thank you for considering my project. Have fun!
