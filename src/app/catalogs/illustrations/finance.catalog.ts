import { BankingIllustration } from '../../../template/ui/illustrations/finance/banking.illustration'
import { BudgetIllustration } from '../../../template/ui/illustrations/finance/budget.illustration'
import { CalculatorIllustration } from '../../../template/ui/illustrations/finance/calculator.illustration'
import { CoinsIllustration } from '../../../template/ui/illustrations/finance/coins.illustration'
import { CurrencyExchangeIllustration } from '../../../template/ui/illustrations/finance/currency.exchange.illustration'
import { FinancialGoalIllustration } from '../../../template/ui/illustrations/finance/financial.goal.illustration'
import { InvestmentIllustration } from '../../../template/ui/illustrations/finance/investment.illustration'
import { ReceiptIllustration } from '../../../template/ui/illustrations/finance/receipt.illustration'
import { SavingsIllustration } from '../../../template/ui/illustrations/finance/savings.illustration'
import { WalletIllustration } from '../../../template/ui/illustrations/finance/wallet.illustration'
import type { IllustrationEntry } from './illustration.types'

export const financeIllustrations: IllustrationEntry[] = [
  {
    id: 'banking',
    name: 'Banking',
    componentName: 'BankingIllustration',
    description: 'A familiar home for financial services.',
    category: 'finance',
    isNew: true,
    component: BankingIllustration,
  },
  {
    id: 'budget',
    name: 'Budget',
    componentName: 'BudgetIllustration',
    description: 'A clear plan for spending and saving well.',
    category: 'finance',
    isNew: true,
    component: BudgetIllustration,
  },
  {
    id: 'calculator',
    name: 'Calculator',
    componentName: 'CalculatorIllustration',
    description: 'Working out the numbers one step at a time.',
    category: 'finance',
    isNew: true,
    component: CalculatorIllustration,
  },
  {
    id: 'coins',
    name: 'Coins',
    componentName: 'CoinsIllustration',
    description: 'Small amounts that add up over time.',
    category: 'finance',
    isNew: true,
    component: CoinsIllustration,
  },
  {
    id: 'currency-exchange',
    name: 'Currency exchange',
    componentName: 'CurrencyExchangeIllustration',
    description: 'Different currencies with a shared purpose.',
    category: 'finance',
    isNew: true,
    component: CurrencyExchangeIllustration,
  },
  {
    id: 'financial-goal',
    name: 'Financial goal',
    componentName: 'FinancialGoalIllustration',
    description: 'Steady savings toward a meaningful milestone.',
    category: 'finance',
    isNew: true,
    component: FinancialGoalIllustration,
  },
  {
    id: 'investment',
    name: 'Investment',
    componentName: 'InvestmentIllustration',
    description: 'Growing value with patience and a clear plan.',
    category: 'finance',
    isNew: true,
    component: InvestmentIllustration,
  },
  {
    id: 'receipt',
    name: 'Receipt',
    componentName: 'ReceiptIllustration',
    description: 'A clear record of a completed purchase.',
    category: 'finance',
    isNew: true,
    component: ReceiptIllustration,
  },
  {
    id: 'savings',
    name: 'Savings',
    componentName: 'SavingsIllustration',
    description: 'A little saved today for a brighter tomorrow.',
    category: 'finance',
    isNew: true,
    component: SavingsIllustration,
  },
  {
    id: 'wallet',
    name: 'Wallet',
    componentName: 'WalletIllustration',
    description: 'Everyday essentials kept neatly in one place.',
    category: 'finance',
    isNew: true,
    component: WalletIllustration,
  },
]
