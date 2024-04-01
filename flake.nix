{
  description = "A website for generating random memes";
  inputs = {
    nixpkgs.url = "nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = {
    nixpkgs,
    flake-utils,
    ...
  }:
    flake-utils.lib.eachDefaultSystem (
      system: let
        pkgs = nixpkgs.legacyPackages.${system};
        packages = with pkgs; [
          nodejs_21
          nodePackages.pnpm
          fish
          statix
          alejandra
          deadnix
          nil
        ];
      in {
        devShell = pkgs.mkShell {
          buildInputs = packages;
          shellHook = ''
            exec fish
          '';
        };
        formatter = pkgs.alejandra;
      }
    );
}
