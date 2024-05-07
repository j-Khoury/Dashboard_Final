import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { FC } from 'react'

interface ILabeledInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
  containerStyle?: string
}

const LabeledInput: FC<ILabeledInputProps> = ({
  label,
  error,
  containerStyle,
  className,
  ...props
}) => {
  return (
    <div className={cn('flex w-full flex-col gap-1', containerStyle)}>
      <span className="text-sm leading-5 text-gray-800">{label}</span>
      <Input
        className={cn(
          'shadow-none',
          className,
          error && 'border-warning focus-visible:ring-0',
        )}
        {...props}
      />
      {error && <span className="text-xs leading-4 text-warning">{error}</span>}
    </div>
  )
}

export default LabeledInput
