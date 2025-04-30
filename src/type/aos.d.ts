declare module "aos" {
  interface AosOptions {
    duration?: number;
    easing?: string;
    delay?: number;
    offset?: number;
    once?: boolean;
    mirror?: boolean;
    anchorPlacement?: string;
  }

  const AOS: {
    init: (options?: AosOptions) => void;
    refresh: () => void;
    refreshHard: () => void;
  };

  export default AOS;
}
