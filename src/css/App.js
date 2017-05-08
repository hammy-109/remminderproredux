import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  app: {
    textAlign: 'center',
    padding: [{ unit: '%V', value: 0.02 }, { unit: '%H', value: 0.02 }, { unit: '%V', value: 0.02 }, { unit: '%H', value: 0.02 }]
  },
  'app-title': {
    fontSize: [{ unit: 'px', value: 40 }],
    padding: [{ unit: '%V', value: 0.02 }, { unit: '%H', value: 0.02 }, { unit: '%V', value: 0.02 }, { unit: '%H', value: 0.02 }]
  },
  'form-grp': {
    padding: [{ unit: '%V', value: 0.02 }, { unit: '%H', value: 0.02 }, { unit: '%V', value: 0.02 }, { unit: '%H', value: 0.02 }]
  },
  input: {
    margin: [{ unit: 'px', value: 5 }, { unit: 'px', value: 5 }, { unit: 'px', value: 5 }, { unit: 'px', value: 5 }]
  },
  btn: {
    margin: [{ unit: 'px', value: 5 }, { unit: 'px', value: 5 }, { unit: 'px', value: 5 }, { unit: 'px', value: 5 }]
  },
  'list-group-item': {
    padding: [{ unit: '%V', value: 0.02 }, { unit: '%H', value: 0.02 }, { unit: '%V', value: 0.02 }, { unit: '%H', value: 0.02 }]
  },
  'list-item': {
    textAlign: 'left'
  },
  'list-delete-item': {
    textAlign: 'right',
    cursor: 'pointer',
    color: 'red'
  }
});
