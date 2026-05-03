import { NotificationType } from '@/types/dummyData.types'

export const NOTIFICATION_ICONS: Record<
  NotificationType,
  { icon: string; label: string }
> = {
  billing_reminder: { icon: 'schedule', label: 'Billing Reminder' },
  payment_success: { icon: 'check-circle', label: 'Payment Success' },
  payment_failed: { icon: 'error', label: 'Payment Failed' },
  trial_expiring: { icon: 'hourglass-top', label: 'Trial Expiring' },
  price_change: { icon: 'trending-up', label: 'Price Change' },
  subscription_cancelled: { icon: 'cancel', label: 'Cancelled' },
  renewal_upcoming: { icon: 'autorenew', label: 'Renewal Upcoming' },
}

export const NOTIFICATION_COLORS: Record<
  NotificationType,
  { bg: string; text: string }
> = {
  billing_reminder: { bg: '#FEF3C7', text: '#D97706' },
  payment_success: { bg: '#D1FAE5', text: '#059669' },
  payment_failed: { bg: '#FEE2E2', text: '#DC2626' },
  trial_expiring: { bg: '#DBEAFE', text: '#2563EB' },
  price_change: { bg: '#EDE9FE', text: '#7C3AED' },
  subscription_cancelled: { bg: '#F3F4F6', text: '#6B7280' },
  renewal_upcoming: { bg: '#ECFDF5', text: '#10B981' },
}
