import { afterEach, beforeEach } from "@voidzero-dev/vite-plus/test";

const stubEnvVars = () => {
  let originals = {} as NodeJS.ProcessEnv;

  beforeEach(() => {
    originals = { ...process.env };
  });

  afterEach(() => {
    process.env = { ...originals };
  });
};

export default stubEnvVars;
