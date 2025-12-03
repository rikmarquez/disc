# Protocolo de Inicio - Claude Code

## Instrucciones de Inicio de Sesión

Hola Claude Code! Al iniciar cada sesión, por favor:

### 1. Lee la documentación del proyecto

Debes leer estos archivos EN ORDEN:

1. **`docs/project-status.md`** - Para conocer el estado actual
2. **`docs/technical-specs.md`** - Para entender la arquitectura
3. **`docs/session-learnings.md`** - Para aprender de sesiones anteriores

### 2. Proceso de Inicio

Después de leer los archivos:

1. Confirma que comprendes el estado actual del proyecto
2. Resume brevemente:
   - Qué está completo
   - Qué está en progreso
   - Problemas conocidos
3. Pregúntame: **"¿En qué vamos a trabajar hoy?"**

### 3. Durante la Sesión

- Consulta `session-learnings.md` antes de resolver problemas similares
- Si encuentras un error, revisa si hay una solución documentada
- Mantén en mente la estructura de datos y endpoints de `technical-specs.md`

### 4. Al Finalizar la Sesión

Recuérdame actualizar:

- [ ] `project-status.md` - Versión, funcionalidades completadas, próximos pasos
- [ ] `technical-specs.md` - Solo si hubo cambios en arquitectura/BD/endpoints
- [ ] `session-learnings.md` - Solo registrar:
  - Decisiones técnicas importantes (no obvias)
  - Bugs complejos con solución (código)
  - Aprendizajes clave (no repetir lo básico)
  - Actualizar historial de versiones (formato breve)

---

## Estrategia de Documentación

### Qué Documentar en `session-learnings.md`

**✅ SÍ documentar:**
- Decisiones arquitectónicas importantes
- Bugs complejos o no obvios con solución en código
- Aprendizajes que eviten errores futuros
- Trade-offs técnicos evaluados

**❌ NO documentar:**
- Implementaciones estándar (CRUD básico, endpoints REST)
- Configuraciones obvias
- Contexto excesivo o repetitivo
- Pasos detallados que están en commits

### Formatos

**Bugs Resueltos:**
```
### [Título corto]
**Problema:** [Una línea]
**Solución:**
```code```
```

**Decisiones Técnicas:**
```
### [Decisión tomada]
- **Opción elegida:** X
- **Justificación:** [Bullet points breves]
```

**Historial de Versiones:**
```
### v0.X.0 (YYYY-MM-DD)
**Completado:**
- [Bullet points principales]
```

---

## Reglas Importantes

1. **Siempre lee los docs antes de empezar a codear**
2. **Referencia los aprendizajes previos cuando sea relevante**
3. **Sigue las convenciones establecidas en technical-specs.md**
4. **Documentación concisa > Documentación extensa** (calidad sobre cantidad)

---

**Versión del protocolo:** 2.0
