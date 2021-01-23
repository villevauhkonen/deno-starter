FROM hayd/deno:1.5.2

EXPOSE 8080

WORKDIR /app

# Prefer not to run as root.
USER deno

# Cache the dependencies as a layer (this is re-run only when deps.ts is modified).
# Ideally this will download and compile _all_ external files used in mod.ts.
COPY deps /app/deps
RUN deno cache deps/*

# These steps will be re-run upon each file change in your working directory:
ADD . /app
# Compile the main app so that it doesn't need to be compiled each startup/entry.
RUN deno cache src/mod.ts

# These are passed as deno arguments when run with docker:
CMD ["run", "--allow-net", "./src/mod.ts"]