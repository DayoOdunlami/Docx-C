export interface Stage {
  id: string;
  title: string;
  icon: string;
  status: 'complete' | 'current' | 'upcoming';
  description: string;
}

export interface Section {
  id: string;
  title: string;
  slug: string;
  stage: string;
  orderIndex: number;
  roles: string[];
  lockMode: 'locked' | 'semi-dynamic' | 'dynamic';
  content: string;
}

export const MOCK_SIZ = {
  id: "siz-playbook",
  title: "Station Innovation Zone Playbook",
  subtitle: "Your guide to trialing innovation at railway stations",
  domain: "siz",
  templateId: "playbook-staged",
  
  stages: [
    {
      id: "intro",
      title: "Introduction",
      icon: "🎯",
      status: "complete" as const,
      description: "Understand the SIZ programme"
    },
    {
      id: "discovery",
      title: "Discovery",
      icon: "🔍",
      status: "current" as const,
      description: "Identify opportunities"
    },
    {
      id: "planning",
      title: "Planning",
      icon: "📋",
      status: "upcoming" as const,
      description: "Develop your trial plan"
    },
    {
      id: "execution",
      title: "Execution",
      icon: "🚀",
      status: "upcoming" as const,
      description: "Run your trial"
    },
    {
      id: "learning",
      title: "Learning",
      icon: "📊",
      status: "upcoming" as const,
      description: "Capture and share insights"
    },
  ],
  
  sections: [
    {
      id: "intro-welcome",
      title: "Welcome to SIZ",
      slug: "welcome",
      stage: "intro",
      orderIndex: 0,
      roles: ["all"],
      lockMode: "locked" as const,
      content: `# Welcome to the Station Innovation Zone

The Station Innovation Zone (SIZ) programme helps railway stations become testbeds for innovation.

## What is SIZ?

SIZ provides a framework and support for stations to trial new:
- Technologies and services
- Operational processes
- Customer experiences
- Sustainability initiatives

## Why Trial at Stations?

Stations are perfect innovation testbeds because they:
- Have high footfall and diverse users
- Face real operational challenges
- Can demonstrate impact quickly
- Provide controlled environments

## How to Use This Playbook

This interactive guide will walk you through:
1. **Discovery**: Finding the right innovation opportunity
2. **Planning**: Designing your trial properly
3. **Execution**: Running the trial effectively
4. **Learning**: Capturing and sharing insights

Let's get started!`
    },
    {
      id: "discovery-overview",
      title: "Discovery Phase",
      slug: "discovery-overview",
      stage: "discovery",
      orderIndex: 1,
      roles: ["station-manager", "operations-lead"],
      lockMode: "semi-dynamic" as const,
      content: `# Discovery Phase

## Objectives

The discovery phase helps you:
1. Identify innovation opportunities at your station
2. Understand stakeholder needs and constraints
3. Assess feasibility and potential impact
4. Select the right trial to pursue

## Timeline

Typical duration: **2-4 weeks**

## Key Activities

### 1. Station Walkthrough

Walk your station with fresh eyes:
- What frustrates passengers?
- Where are operational inefficiencies?
- What infrastructure could be better utilized?
- What new technologies could help?

### 2. Stakeholder Mapping

Identify who needs to be involved:
- Station staff and management
- Operations and commercial teams
- External partners (e.g. retailers, transport operators)
- Local community representatives

### 3. Opportunity Assessment

For each opportunity, evaluate:
- **Impact**: How much difference could this make?
- **Feasibility**: How easy is it to trial?
- **Resources**: What budget, time, and people are needed?
- **Risk**: What could go wrong?

## Tools & Templates

Download these to help with discovery:
- Opportunity Canvas
- Stakeholder Mapping Template
- Feasibility Assessment Matrix

## What's Next?

Once you've identified promising opportunities, move to the Planning phase to design your trial.`
    },
    {
      id: "discovery-stakeholders",
      title: "Stakeholder Mapping",
      slug: "stakeholder-mapping",
      stage: "discovery",
      orderIndex: 2,
      roles: ["station-manager"],
      lockMode: "dynamic" as const,
      content: `# Stakeholder Mapping

## Who Needs to Be Involved?

Successful innovation trials require buy-in from multiple stakeholders. Map out who needs to be involved and how.

## Key Stakeholder Groups

### Internal Stakeholders
- **Station Management**: Authority to approve trials
- **Operations Team**: Day-to-day execution
- **Commercial Team**: Revenue impact considerations
- **Safety Team**: Risk assessment and compliance

### External Stakeholders
- **Transport Operators**: Network effects
- **Retailers**: Commercial opportunities
- **Local Community**: User needs and feedback
- **Suppliers**: Technology providers

## Stakeholder Matrix

Create a matrix mapping:
- **Influence**: How much power do they have?
- **Interest**: How much do they care?
- **Impact**: How will the trial affect them?

This helps prioritize who to engage and how.`
    },
    {
      id: "planning-overview",
      title: "Planning Phase",
      slug: "planning-overview",
      stage: "planning",
      orderIndex: 3,
      roles: ["station-manager", "operations-lead"],
      lockMode: "semi-dynamic" as const,
      content: `# Planning Phase

## Objectives

1. Develop detailed trial plans
2. Secure resources and approvals
3. Set up measurement framework

## Timeline

Typically 3-6 weeks

## Key Activities

### 1. Trial Design

For your selected opportunity:

**Define the hypothesis:**
"We believe that [intervention] will result in [outcome] for [target users]"

**Example:**
"We believe that digital wayfinding kiosks will reduce passenger confusion by 30% for first-time visitors"

### 2. Resource Planning

- Budget requirements
- Staff time allocation
- Equipment/materials needed
- Timeline and milestones

### 3. Measurement Plan

How will you know if the trial succeeded?

**Metrics to consider:**
- Quantitative: Usage stats, time savings, error rates
- Qualitative: User feedback, staff observations

### 4. Risk Assessment

What could go wrong? How will you mitigate?

## Deliverables

- Completed Trial Brief
- Resource allocation plan  
- Measurement framework
- Risk register`
    },
    {
      id: "execution-overview",
      title: "Execution Phase",
      slug: "execution-overview",
      stage: "execution",
      orderIndex: 4,
      roles: ["station-manager", "operations-lead"],
      lockMode: "dynamic" as const,
      content: `# Execution Phase

## Objectives

1. Launch the trial successfully
2. Monitor progress and adjust as needed
3. Collect data continuously

## Timeline

Varies by trial scope (typically 4-12 weeks)

## Key Activities

### 1. Launch Preparation

Before going live:

- **Final checks**: Ensure all equipment, systems, and processes are ready
- **Staff briefing**: Train all relevant staff on the trial
- **Communication**: Inform passengers and stakeholders
- **Baseline measurement**: Capture initial metrics

### 2. Trial Execution

During the trial:

- **Daily monitoring**: Track key metrics and observations
- **Issue resolution**: Address problems quickly
- **Data collection**: Gather quantitative and qualitative data
- **Stakeholder updates**: Keep relevant parties informed

### 3. Adaptations

Be prepared to adjust:

- **Process tweaks**: Refine based on early feedback
- **Timeline adjustments**: Extend or modify as needed
- **Scope changes**: Pivot if the opportunity changes

## Success Factors

- Clear communication with all stakeholders
- Flexible approach to adaptations
- Continuous data collection
- Regular review meetings

## Common Challenges

- Technical issues with new systems
- Staff resistance to change
- Passenger confusion
- Data collection gaps

## Tips for Success

- Start small and scale up
- Communicate frequently
- Celebrate small wins
- Learn from setbacks`
    },
    {
      id: "learning-overview",
      title: "Learning Phase",
      slug: "learning-overview",
      stage: "learning",
      orderIndex: 5,
      roles: ["all"],
      lockMode: "dynamic" as const,
      content: `# Learning Phase

## Objectives

1. Analyze trial results
2. Extract key insights
3. Share learnings with the network
4. Decide on next steps

## Timeline

Typically 2-4 weeks after trial completion

## Key Activities

### 1. Data Analysis

Review all collected data:

- **Quantitative analysis**: Compare metrics against baseline
- **Qualitative insights**: Review feedback and observations
- **Cost-benefit assessment**: Evaluate ROI
- **Impact measurement**: Assess real-world outcomes

### 2. Insight Extraction

Identify what worked and what didn't:

- **Success factors**: What contributed to positive outcomes?
- **Challenges**: What barriers were encountered?
- **Surprises**: What unexpected findings emerged?
- **Recommendations**: What should happen next?

### 3. Knowledge Sharing

Spread the learning:

- **Case study**: Document the trial experience
- **Network sharing**: Present to other stations
- **Best practices**: Extract reusable insights
- **Lessons learned**: Share what to avoid

### 4. Decision Making

Based on results:

- **Scale up**: Roll out more widely
- **Iterate**: Refine and try again
- **Pivot**: Try a different approach
- **Stop**: Discontinue if not viable

## Deliverables

- Trial report with findings
- Recommendations document
- Case study for network
- Next steps plan

## Reflection Questions

- What would we do differently?
- What surprised us?
- What would we recommend to others?
- How can we build on this?`
    }
  ]
};

