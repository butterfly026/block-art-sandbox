import * as m from '@components/models';

export default [
  {
    name: 'Burger',
    unitPrice: 2449,
    units: 10,
    view: {
      model: m.Burger,
      position: [0, -0.2, 0],
      scale: 1.7,
      rotation: [Math.PI * 0.05, Math.PI * 0.3, Math.PI * 0.02],
      physics: {
        collider: 'cylinder',
        colliderArgs: [0.65, 0.69, 1.05],
        modelPosition: [0, -0.54, 0],
      },
    },
  },
  {
    name: 'Double Burger',
    unitPrice: 4999,
    units: 10,
    view: {
      model: m.BurgerDouble,
      position: [0, -0.25, 0],
      scale: 1.7,
      rotation: [Math.PI * 0.05, Math.PI * 0.3, Math.PI * 0.02],
      physics: {
        collider: 'cylinder',
        colliderArgs: [0.65, 0.69, 1.33],
        modelPosition: [0, -0.68, 0],
      },
    },
  },
  {
    name: 'Bowl Broth',
    unitPrice: 1949,
    units: 10,
    view: {
      model: m.BowlBroth,
      scale: 1.6,
      rotation: [Math.PI * 0.2, Math.PI * 0.34, Math.PI * 0.05],
      physics: {
        collider: 'cylinder',
        colliderArgs: [0.32, 0.32, 2.0],
        modelPosition: [0.33, 0, 0],
        modelRotation: [0, 0, Math.PI * 0.5],
      },
    },
  },
  {
    name: 'Cake Birthday',
    unitPrice: 9999,
    units: 10,
    view: {
      model: m.CakeBirthday,
      position: [0, 0.07, 0],
      scale: 1.1,
      rotation: [Math.PI * 0.2, Math.PI * 0.0, Math.PI * 0.07],
      physics: {
        collider: 'cylinder',
        colliderArgs: [1.68, 1.68, 0.16],
        modelPosition: [0, -0.09, 0],
      },
    },
  },
  {
    name: 'Chocolate Wrapper',
    unitPrice: 1499,
    units: 10,
    view: {
      model: m.ChocolateWrapper,
      position: [0, -0.29, 0],
      scale: 1.6,
      rotation: [Math.PI * 0.0, Math.PI * 0.41, Math.PI * 0.09],
      physics: {
        collider: 'box',
        colliderArgs: [0.58, 1.15, 0.95],
        modelPosition: [0, -0.58, 0],
      },
    },
  },
  {
    name: 'Cup Tea',
    unitPrice: 949,
    units: 10,
    view: {
      model: m.CupTea,
      position: [0, -0.05, 0],
      scale: 2.5,
      rotation: [Math.PI * 0.17, Math.PI * 0.4, Math.PI * 0.07],
      physics: {
        collider: 'cylinder',
        colliderArgs: [0.5, 0.5, 0.33],
        modelPosition: [0, -0.18, 0],
      },
    },
  },
  {
    name: 'Cup Tea1',
    unitPrice: 949,
    units: 10,
    view: {
      model: m.CupTea,
      position: [0, -0.05, 0],
      scale: 2.5,
      rotation: [Math.PI * 0.17, Math.PI * 0.4, Math.PI * 0.07],
      physics: {
        collider: 'cylinder',
        colliderArgs: [0.5, 0.5, 0.33],
        modelPosition: [0, -0.18, 0],
      },
    },
  },
];
