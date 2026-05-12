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
  hero: {
    backgroundColor: colors.primary,
    borderRadius: 24,
    padding: 22,
    marginBottom: 22,
  },
  heroBadge: {
    color: colors.info,
    fontSize: 12,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    marginBottom: 10,
  },
  heroTitle: {
    color: colors.white,
    fontSize: 25,
    fontWeight: '800',
    lineHeight: 33,
    marginBottom: 12,
  },
  heroText: {
    color: colors.heroText,
    fontSize: 15,
    lineHeight: 23,
  },
  sectionTitle: {
    color: colors.text,
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 14,
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: 20,
    padding: 18,
    marginBottom: 12,
    shadowColor: '#000000',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 2,
  },
  cardText: {
    color: '#334155',
    fontSize: 14,
    lineHeight: 22,
    fontWeight: '600',
  },
  footerCard: {
    backgroundColor: colors.surfaceAlt,
    borderRadius: 20,
    padding: 18,
    marginTop: 8,
  },
  footerTitle: {
    color: colors.primary,
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 8,
  },
  footerText: {
    color: '#3D5871',
    fontSize: 14,
    lineHeight: 22,
  },
});
