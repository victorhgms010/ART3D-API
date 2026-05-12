import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F5F7FB',
  },
  content: {
    padding: 18,
    paddingBottom: 34,
  },
  headerCard: {
    backgroundColor: colors.surface,
    borderRadius: 22,
    padding: 18,
    marginBottom: 18,
    shadowColor: '#000000',
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  title: {
    color: colors.primary,
    fontSize: 24,
    fontWeight: '800',
    marginBottom: 8,
  },
  subtitle: {
    color: colors.textSecondary,
    fontSize: 14,
    lineHeight: 21,
  },
  emptyCard: {
    backgroundColor: colors.surface,
    borderRadius: 20,
    padding: 20,
    marginBottom: 16,
    alignItems: 'center',
  },
  emptyTitle: {
    color: colors.text,
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 6,
  },
  emptyText: {
    color: colors.textSecondary,
    textAlign: 'center',
  },
  itemCard: {
    backgroundColor: colors.surface,
    borderRadius: 20,
    padding: 16,
    marginBottom: 14,
    shadowColor: '#000000',
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },

  itemPhoto: {
    width: '100%',
    height: 150,
    borderRadius: 18,
    marginBottom: 14,
  },
  itemInfo: {
    marginBottom: 14,
  },
  category: {
    color: colors.secondary,
    fontSize: 12,
    fontWeight: '700',
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  itemName: {
    color: colors.text,
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 6,
  },
  price: {
    color: colors.primaryStrong,
    fontSize: 17,
    fontWeight: '800',
    marginBottom: 4,
  },
  quantity: {
    color: colors.textSecondary,
    fontSize: 13,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  quantityButton: {
    backgroundColor: colors.accentSoft,
    width: 42,
    height: 42,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  quantityButtonText: {
    color: '#195C5D',
    fontSize: 20,
    fontWeight: '900',
  },
  removeButton: {
    backgroundColor: '#FFE4E6',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 14,
  },
  removeButtonText: {
    color: '#9F1239',
    fontWeight: '800',
  },

  paymentCard: {
    backgroundColor: colors.surface,
    borderRadius: 20,
    padding: 18,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: colors.border,
  },
  paymentTitle: {
    color: colors.text,
    fontSize: 18,
    fontWeight: '900',
    marginBottom: 12,
  },
  paymentOption: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 14,
    paddingVertical: 12,
    paddingHorizontal: 14,
    marginBottom: 10,
    backgroundColor: colors.surfaceAlt,
  },
  paymentOptionActive: {
    backgroundColor: colors.primaryStrong,
    borderColor: colors.primaryStrong,
  },
  paymentText: {
    color: colors.text,
    fontWeight: '800',
  },
  paymentTextActive: {
    color: colors.white,
  },
  paymentHint: {
    color: colors.textSecondary,
    fontSize: 13,
    lineHeight: 18,
    marginTop: 4,
  },
  totalCard: {
    backgroundColor: colors.primary,
    borderRadius: 20,
    padding: 18,
    marginTop: 4,
    marginBottom: 16,
  },
  totalLabel: {
    color: colors.heroText,
    fontWeight: '700',
    marginBottom: 4,
  },
  totalValue: {
    color: colors.white,
    fontSize: 28,
    fontWeight: '900',
  },
  totalItems: {
    color: colors.heroText,
    marginTop: 6,
  },
  checkoutButton: {
    backgroundColor: colors.secondary,
    borderRadius: 16,
    paddingVertical: 15,
    alignItems: 'center',
  },
  checkoutButtonDisabled: {
    opacity: 0.5,
  },
  checkoutButtonText: {
    color: colors.white,
    fontWeight: '800',
    fontSize: 16,
  },
});
