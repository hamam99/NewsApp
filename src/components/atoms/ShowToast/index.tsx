import Toast, {ToastType} from 'react-native-toast-message';

const showToast = (message: string, type: ToastType = 'success') => {
  Toast.show({
    type,
    text1: message,
    visibilityTime: 2000,
  });
};

export default showToast;
