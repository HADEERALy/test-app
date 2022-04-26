import Colors from './Colors';
import {calcWidth} from './Dimension';

export default {
  lightText: {
    fontWeight: '100',
    fontFamily: 'FuturaPTLight',
  },
  mediumText: {
    fontWeight: '500',
    fontFamily: 'FuturaPTMedium',
  },
  BoldText: {
    fontWeight: '700',
    fontFamily: 'FuturaPTBold',
  },
  header: {
    fontSize: calcWidth(26),
    fontWeight: 'bold',
    color: Colors.white,
  },
  //   headerTheme: {
  //     fontSize: calcWidth(24),
  //     fontWeight: 'bold',
  //     color: Colors.theme,
  //   },
  bookText: {
    fontFamily: 'FuturaPTBook',
  },
  smallLink: {
    fontFamily: 'FuturaPTBook',
    fontSize: calcWidth(14),
  },
  pagePadding: {
    paddingHorizontal: 15,
    backgroundColor: Colors.white,
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexRow_between: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  selectInput: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    fontSize: 17,
    opacity: 0.9,
    borderRadius: 10,
    marginVertical: 10,
  },
  errorText: {
    textAlign: 'left',
    color: Colors.danger,
    marginHorizontal: 5,
    textTransform: 'capitalize',
  },
  cardShadow: {
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 5,
  },
};
