import type { PersistanceUser } from '@lib/modules/user/schemas/user.model'

export interface ForControlQuerying {
  getCurrentUser: () => Promise<PersistanceUser | null>
}