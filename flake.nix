{
  description = "Random meme generator, made with Nuxt.js 3";
  inputs = {
    nixpkgs.url = "nixpkgs/nixos-unstable";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let pkgs = nixpkgs.legacyPackages.${system}; in {
        devShell = pkgs.mkShell {
          buildInputs = with pkgs; [
            nodejs_21
            corepack_21
          ];
        };
        formatter = pkgs.nixpkgs-fmt;
      }
    );
}
