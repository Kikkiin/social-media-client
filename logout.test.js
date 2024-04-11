import { logout } from './src/js/api/auth/logout.js'; // Husk å erstatte med riktig importsti

// Mocking av localStorage
const localStorageMock = {
  removeItem: jest.fn(),
  setItem: jest.fn(),
  getItem: jest.fn().mockReturnValue(null), // Kun nødvendig hvis du bruker getItem i andre tester
  clear: jest.fn(),
};
global.localStorage = localStorageMock;

describe('Logout Functionality', () => {
  beforeEach(() => {
    // Rens opp mocks mellom tester
    localStorageMock.removeItem.mockClear();
  });

  test('should clear token and profile from localStorage on logout', () => {
    logout();

    // Sjekker at localStorage.removeItem har blitt kalt med riktige nøkler
    expect(localStorageMock.removeItem).toHaveBeenCalledWith('token');
    expect(localStorageMock.removeItem).toHaveBeenCalledWith('profile');

    // Sjekker antall kall for å sikre at ikke flere elementer blir fjernet
    expect(localStorageMock.removeItem).toHaveBeenCalledTimes(2);
  });
});
