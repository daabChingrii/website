import "@testing-library/jest-dom";

// Mock IntersectionObserver
class IntersectionObserverMock {
  constructor() {}
  observe() {}
  disconnect() {}
  unobserve() {}
}

global.IntersectionObserver = IntersectionObserverMock;
