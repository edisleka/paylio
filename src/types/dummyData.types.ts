export type NotificationType =
  | 'billing_reminder'
  | 'payment_success'
  | 'payment_failed'
  | 'trial_expiring'
  | 'price_change'
  | 'subscription_cancelled'
  | 'renewal_upcoming'

export type Notification = {
  id: string
  type: NotificationType
  title: string
  body: string
  subscriptionId?: string
  subscriptionName: string
  amount?: number
  timestamp: string // ISO string
  read: boolean
}

export type Subscription = {
  id: string
  name: string
  price: number
  billingCycle: 'monthly' | 'yearly'
  nextBillingDate: string
  icon: any
  Logo?: React.FC<any>
  color: string
  bg?: string
  status: 'active' | 'cancelled' | 'trial'
}

export interface GlobalLogoProps {
  size?: number
  color?: string
  variant?: 'primary' | 'monochrome' | 'dark'
}
