import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: 18,
    paddingBottom: 34,
  },
  hero: {
    backgroundColor: colors.primaryStrong,
    borderRadius: 22,
    padding: 22,
    marginBottom: 18,
  },
  badge: {
    color: '#A7E1DC',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.8,
    marginBottom: 10,
    textTransform: 'uppercase',
  },
  title: {
    color: colors.white,
    fontSize: 24,
    fontWeight: '800',
    lineHeight: 31,
    marginBottom: 10,
  },
  subtitle: {
    color: '#D9E6F2',
    fontSize: 14,
    lineHeight: 22,
  },
  locationPanel: {
    backgroundColor: colors.surface,
    borderRadius: 20,
    padding: 18,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: colors.border,
  },
  storePanel: {
    backgroundColor: colors.surfaceSoft,
    borderRadius: 20,
    padding: 18,
    marginBottom: 18,
  },
  panelLabel: {
    color: colors.textSecondary,
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 0.6,
    marginBottom: 8,
    textTransform: 'uppercase',
  },
  coordinate: {
    color: colors.primary,
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 14,
  },
  metricsRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 12,
  },
  metricBox: {
    flex: 1,
    backgroundColor: '#F6FAFD',
    borderRadius: 16,
    padding: 14,
  },
  metricLabel: {
    color: colors.textSecondary,
    fontSize: 12,
    fontWeight: '700',
    marginBottom: 4,
  },
  metricValue: {
    color: colors.primaryStrong,
    fontSize: 18,
    fontWeight: '900',
  },
  updatedText: {
    color: colors.textMuted,
    fontSize: 13,
    lineHeight: 19,
  },
  storeName: {
    color: colors.primaryStrong,
    fontSize: 19,
    fontWeight: '900',
    marginBottom: 5,
  },
  storeAddress: {
    color: colors.textMuted,
    fontSize: 14,
    fontWeight: '600',
  },
  primaryButton: {
    backgroundColor: colors.primaryStrong,
    borderRadius: 16,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 10,
  },
  primaryButtonText: {
    color: colors.white,
    fontSize: 15,
    fontWeight: '800',
  },
  secondaryButton: {
    backgroundColor: colors.accentSoft,
    borderRadius: 16,
    paddingVertical: 15,
    alignItems: 'center',
  },
  secondaryButtonDisabled: {
    backgroundColor: '#E8EEF5',
  },
  secondaryButtonText: {
    color: '#195C5D',
    fontSize: 15,
    fontWeight: '800',
  },
  secondaryButtonTextDisabled: {
    color: '#7B8A99',
  },
  notice: {
    backgroundColor: '#FFF7E6',
    borderRadius: 16,
    padding: 14,
    marginTop: 14,
    borderWidth: 1,
    borderColor: '#F3D49B',
  },
  noticeText: {
    color: '#76521A',
    fontSize: 13,
    lineHeight: 19,
    fontWeight: '600',
  },
});
