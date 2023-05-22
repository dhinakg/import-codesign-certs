import * as security from '../src/security'

test('imports p12 file', async () => {
  const keychain: string = 'signing_temp'
  const keychainPassword: string = Math.random().toString(36)
  const p12FilePath: string = 'Certificates.p12'
  const p12Password: string = 'password'

  await security.installCertIntoTemporaryKeychain(
    keychain,
    true,
    keychainPassword,
    p12FilePath,
    p12Password
  )

  await security.deleteKeychain(keychain)
})

test('imports p12 file into generated keychain', async () => {
  const keychain: string =
    'import-codesign-certs-keychain-' + Math.random().toString(36).slice(2)
  const keychainPassword: string = Math.random().toString(36)
  const p12FilePath: string = 'Certificates.p12'
  const p12Password: string = 'password'

  await security.installCertIntoTemporaryKeychain(
    keychain,
    true,
    keychainPassword,
    p12FilePath,
    p12Password
  )

  await security.deleteKeychain(keychain)
})
