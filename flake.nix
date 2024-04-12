{
  description = "Random Memes - Instant Laughs";
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
          statix
          alejandra
          deadnix
          nil
        ];
      in {
        devShell = pkgs.mkShell {
          buildInputs = packages;
        };
        formatter = pkgs.alejandra;
      }
    );
}
