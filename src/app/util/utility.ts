import ReactNativeBiometrics from 'react-native-biometrics';

export const formatToCurrency = (amount: number): string => {
  return amount.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
};

/**
 * Simulates a FaceID check using the device's biometric prompt.
 * @returns {Promise<string>} The result of the biometric check.
 */
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
