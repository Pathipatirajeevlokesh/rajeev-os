import { Activity, Gauge, Radio, Server } from 'lucide-react'
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { monitoringMetrics } from '@/data/cloud-twin/metrics'
import { Panel } from '@/components/ui/Panel'

export function MonitoringView() {
  return (
    <div className="monitoring-view">
      <div className="monitoring-summary">
        <MonitorMetric icon={Gauge} label="CPU utilization" value="64%" detail="Simulated peak" />
        <MonitorMetric icon={Activity} label="Request count" value="2.4k/min" detail="Current flow" />
        <MonitorMetric icon={Radio} label="Error rate" value="2.1%" detail="Elevated signal" />
        <MonitorMetric icon={Server} label="Availability" value="99.2%" detail="Simulated state" />
      </div>
      <Panel label="SIMULATED TELEMETRY" title="Resource signals">
        <div className="chart-grid">
          <MetricChart dataKey="cpu" color="#45d6d1" name="CPU %" unit="%" />
          <MetricChart dataKey="memory" color="#4ea4ff" name="Memory %" unit="%" />
          <MetricChart dataKey="network" color="#45d6d1" name="Network traffic" unit=" Mbps" />
          <MetricChart dataKey="requests" color="#67d39b" name="Requests / min" unit="" />
          <MetricChart dataKey="errors" color="#e9b86b" name="Error rate" unit="%" />
          <MetricChart dataKey="connections" color="#e9b86b" name="DB connections" unit="" />
        </div>
      </Panel>
    </div>
  )
}

function MonitorMetric({ icon: Icon, label, value, detail }: { icon: typeof Gauge; label: string; value: string; detail: string }) {
  return <div className="monitor-summary-card"><Icon size={16} /><span>{label}</span><strong>{value}</strong><small>{detail}</small></div>
}

function MetricChart({ dataKey, color, name, unit }: { dataKey: 'cpu' | 'memory' | 'requests' | 'errors' | 'network' | 'connections'; color: string; name: string; unit: string }) {
  return (
    <div className="metric-chart">
      <div className="metric-chart__title"><span>{name}</span><i style={{ background: color }} /></div>
      <ResponsiveContainer width="100%" height={135}>
        <LineChart data={monitoringMetrics}>
          <XAxis dataKey="time" tick={{ fill: '#506271', fontSize: 9 }} axisLine={false} tickLine={false} />
          <YAxis hide domain={['auto', 'auto']} />
          <Tooltip
            contentStyle={{ background: 'var(--surface-raised)', border: '1px solid var(--border-bright)', fontSize: 10 }}
            labelStyle={{ color: 'var(--text-muted)' }}
            formatter={(value) => [`${value}${unit}`, name]}
          />
          <Line type="monotone" dataKey={dataKey} stroke={color} strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
