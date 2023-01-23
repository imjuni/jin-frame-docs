---
lang: en-US
title: Utility Types
description: Utility Types of Jin-Frame
---

Jin-Frame has 2 utility types likes that `ConstructorType`, `OmitConstructorType`. If you have created a request in a complex types of Jin-Frame, you have to also create a constructor parameter in a complex type. Utility types reduce overhead of that task.

## ConstructorType

ConstructorType extract member variable only from Jin-Frame.

```ts
class Test001PostFrame extends JinEitherFrame {
  @JinEitherFrame.param()
  public readonly passing!: string;

  @JinEitherFrame.body()
  public readonly username!: string[];

  @JinEitherFrame.body()
  public readonly password!: string;

  constructor(args: ConstructorType<Test001PostFrame>) {
    super({ ...args });
  }
}
```

## OmitConstructorType

OmitConstructorType extract member variable only from Jin-Frame and some variable omit.

```ts
class Test001PostFrame extends JinEitherFrame {
  @JinEitherFrame.param()
  public readonly passing!: string;

  @JinEitherFrame.body()
  public readonly username!: string[];

  @JinEitherFrame.body()
  public readonly password!: string;

  constructor(args: OmitConstructorType<Test001PostFrame, 'host' | 'method' | 'contentType'>) {
    super({
      ...args,
      host: 'http://some.api.google.com/jinframe/:passing',
      method: 'POST',
    });
  }
}
```

## JinConstructorType

OmitConstructorType extract member variable only from Jin-Frame and some variable omit.

```ts
class Test001PostFrame extends JinEitherFrame {
  @JinEitherFrame.param()
  public readonly passing!: string;

  @JinEitherFrame.body()
  public readonly username!: string[];

  @JinEitherFrame.body()
  public readonly password!: string;

  // JinConstructorType omit 'host', 'path', 'method', 'contentType'
  constructor(args: JinConstructorType<Test001PostFrame>) {
    super({
      ...args,
      host: 'http://some.api.google.com/jinframe/:passing',
      method: 'POST',
    });
  }
}
```

## JinOmitConstructorType

OmitConstructorType extract member variable only from Jin-Frame and some variable omit.

```ts
class Test001PostFrame extends JinEitherFrame {
  @JinEitherFrame.param()
  public readonly passing!: string;

  @JinEitherFrame.body()
  public readonly username!: string[];

  @JinEitherFrame.body()
  public readonly password!: string;

  // JinConstructorType omit 'host', 'path', 'method', 'contentType'
  constructor(args: JinOmitConstructorType<Test001PostFrame, 'usename'>) {
    super({
      ...args,
      host: 'http://some.api.google.com/jinframe/:passing',
      method: 'POST',
    });
  }
}
```
