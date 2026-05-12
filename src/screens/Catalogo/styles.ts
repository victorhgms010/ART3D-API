import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F5F7FB',
  },
  content: {
    padding: 18,
    paddingBottom: 30,
  },
  topCard: {
    backgroundColor: colors.surface,
    borderRadius: 22,
    padding: 18,
    marginBottom: 22,
    shadowColor: '#000000',
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  topTitle: {
    color: colors.primary,
    fontSize: 24,
    fontWeight: '800',
    marginBottom: 8,
  },
  topText: {
    color: colors.textSecondary,
    fontSize: 14,
    lineHeight: 21,
  },
  sectionTitle: {
    color: colors.text,
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 14,
  },
  horizontalList: {
    paddingBottom: 22,
  },
  highlightCard: {
    width: 230,
    backgroundColor: colors.primary,
    borderRadius: 22,
    padding: 16,
    marginRight: 14,
  },
  highlightPhoto: {
    width: '100%',
    height: 120,
    borderRadius: 16,
    marginBottom: 14,
  },
  productName: {
    color: colors.white,
    fontSize: 17,
    fontWeight: '800',
    marginBottom: 4,
  },
  productPrice: {
    color: '#7DD3FC',
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 8,
  },
  productDescription: {
    color: colors.heroText,
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 14,
    minHeight: 60,
  },
  buyButton: {
    backgroundColor: colors.secondary,
    borderRadius: 12,
    paddingVertical: 11,
    alignItems: 'center',
  },
  buyButtonText: {
    color: colors.white,
    fontWeight: '700',
  },
  listCard: {
    backgroundColor: colors.surface,
    borderRadius: 20,
    padding: 14,
    marginBottom: 14,
    flexDirection: 'row',
    shadowColor: '#000000',
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  listPhoto: {
    width: 96,
    height: 96,
    borderRadius: 18,
    marginRight: 14,
  },
  listContent: {
    flex: 1,
  },
  listCategory: {
    color: colors.secondary,
    fontSize: 12,
    fontWeight: '700',
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  listName: {
    color: colors.text,
    fontSize: 17,
    fontWeight: '800',
    marginBottom: 6,
  },
  listDescription: {
    color: colors.textSecondary,
    fontSize: 13,
    lineHeight: 19,
    marginBottom: 10,
  },
  listFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  listPrice: {
    color: colors.primaryStrong,
    fontWeight: '800',
    fontSize: 16,
  },
  smallButton: {
    backgroundColor: colors.accentSoft,
    borderRadius: 12,
    paddingVertical: 9,
    paddingHorizontal: 12,
  },
  smallButtonText: {
    color: '#195C5D',
    fontWeight: '700',
    fontSize: 13,
  },
});
