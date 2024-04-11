import ReactNativeBiometrics from 'react-native-biometrics';

export const formatToCurrency = (amount: number): string => {
  return amount.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
};

export const simulateFaceID = async (): Promise<string> => {
  const rnBiometrics = new ReactNativeBiometrics();
  try {
    const response = await rnBiometrics.simplePrompt({
      promptMessage: 'Confirm FaceID',
    });
    if (response.success) {
      console.log('successful biometrics provided');
      return 'Authenticated Successfully';
    } else {
      console.log('user cancelled biometric prompt');
      return 'Authentication Failed';
    }
  } catch (error) {
    console.log('biometrics failed', error);
    return 'Authentication Error';
  } finally {
    return 'Authenticated Successfully [Forced True]';
  }
};

export function simulateAsyncCall() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldFail = false; // Change this to true to simulate an error
      if (shouldFail) {
        reject(new Error('Failed due to network error'));
      } else {
        resolve('Data fetched successfully');
      }
    }, 2000);
  });
}
